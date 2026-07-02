"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReportStepper } from "@/components/report/report-stepper";
import { PhotoUploadStep, type AiSuggestion } from "@/components/report/photo-upload-step";
import { LocationStep } from "@/components/report/location-step";
import { DetailsStep } from "@/components/report/details-step";
import { ReportSuccess } from "@/components/report/report-success";
import { mockGeocode } from "@/lib/mock-geocode";
import type { ObstructionType } from "@/types";

function generateCaseNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = String(Math.floor(Math.random() * 900) + 100);
  return `#${y}${m}${d}${rand}`;
}

const TOTAL_STEPS = 3;

export function ReportFlow() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<AiSuggestion | null>(null);

  const [position, setPosition] = useState<[number, number] | null>(null);
  const [address, setAddress] = useState("");
  const [geocodeStatus, setGeocodeStatus] = useState<"idle" | "located" | "not-found">("idle");

  const [obstructionType, setObstructionType] = useState<ObstructionType | null>(null);
  const [description, setDescription] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [caseNumber, setCaseNumber] = useState("");

  const aiTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Revokes the *previous* preview URL whenever it changes (and on unmount).
  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  // Separate from the effect above: this must only clear the timeout on
  // true unmount, not on every photoPreview change — otherwise it clears
  // the timeout handleFileSelect just scheduled, before it can fire.
  useEffect(() => {
    return () => {
      if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current);
    };
  }, []);

  function handleFileSelect(file: File) {
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoPreview(URL.createObjectURL(file));
    setAiSuggestion(null);
    setAiLoading(true);
    setError(null);

    if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current);
    aiTimeoutRef.current = setTimeout(() => {
      const suggestion: AiSuggestion = { type: "機車停放", confidence: 92 };
      setAiSuggestion(suggestion);
      setAiLoading(false);
      setObstructionType((current) => current ?? suggestion.type);
    }, 1100);
  }

  function handleAddressChange(value: string) {
    setAddress(value);
    const match = mockGeocode(value);
    if (match) {
      setPosition(match);
      setGeocodeStatus("located");
    } else {
      setGeocodeStatus(value.trim() ? "not-found" : "idle");
    }
  }

  function handleMapPick(lat: number, lng: number) {
    setPosition([lat, lng]);
    setGeocodeStatus("idle");
  }

  function handleClearPhoto() {
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoPreview(null);
    setAiSuggestion(null);
    setAiLoading(false);
  }

  function validateStep(current: number): string | null {
    if (current === 1 && !photoPreview) return "請先上傳照片";
    if (current === 2 && !position) return "請於地圖上點選案件地點";
    if (current === 2 && !address.trim()) return "請填寫詳細地址";
    if (current === 3 && !obstructionType) return "請選擇阻礙類型";
    return null;
  }

  function handleNext() {
    const validationError = validateStep(step);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);

    if (step === TOTAL_STEPS) {
      setCaseNumber(generateCaseNumber());
      setSubmitted(true);
      return;
    }
    setStep((s) => s + 1);
  }

  function handleBack() {
    setError(null);
    setStep((s) => Math.max(1, s - 1));
  }

  if (submitted) {
    return (
      <ReportSuccess
        caseNumber={caseNumber}
        photoPreview={photoPreview}
        address={address}
        obstructionType={obstructionType}
      />
    );
  }

  return (
    <div>
      <ReportStepper currentStep={step} />

      <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-8">
        {step === 1 ? (
          <PhotoUploadStep
            photoPreview={photoPreview}
            aiLoading={aiLoading}
            aiSuggestion={aiSuggestion}
            onFileSelect={handleFileSelect}
            onClear={handleClearPhoto}
          />
        ) : step === 2 ? (
          <LocationStep
            position={position}
            address={address}
            geocodeStatus={geocodeStatus}
            onPick={handleMapPick}
            onAddressChange={handleAddressChange}
          />
        ) : (
          <DetailsStep
            obstructionType={obstructionType}
            description={description}
            onTypeChange={setObstructionType}
            onDescriptionChange={setDescription}
          />
        )}

        {error ? (
          <p className="mt-4 text-sm font-medium text-destructive">{error}</p>
        ) : null}

        <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
            className="gap-1.5"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            上一步
          </Button>
          <Button type="button" onClick={handleNext} className="gap-1.5">
            {step === TOTAL_STEPS ? (
              <>
                送出回報
                <Send className="size-4" aria-hidden="true" />
              </>
            ) : (
              <>
                下一步
                <ChevronRight className="size-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
