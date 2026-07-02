import { FriendlyStoreCard } from "@/components/home/friendly-store-card";
import { getFriendlyStores } from "@/services/friendly-stores";
import { SectionTitle, SectionDescription } from "@/components/shared/typography";

export async function FriendlyStoresSection() {
  const stores = await getFriendlyStores();

  return (
    <div id="friendly-stores" className="scroll-mt-24">
      <SectionTitle>友善騎樓店家</SectionTitle>
      <SectionDescription>
        長期維持騎樓暢通的店家與建物，通過認證後可獲得平台曝光與商圈推薦。
      </SectionDescription>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stores.map((store) => (
          <FriendlyStoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
