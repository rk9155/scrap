import { Skeleton } from "antd";

export default function LoadingState() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Skeleton.Input active style={{ width: 128 }} />
            <Skeleton.Button active shape="round" />
          </div>
          <Skeleton.Input active style={{ width: 144 }} />
        </header>

        <div className="space-y-6">
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton.Input active style={{ width: 96 }} />
              <Skeleton.Button active shape="round" />
            </div>
            <div className="match-card p-5 space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Skeleton.Avatar active size="small" shape="circle" />
                  <Skeleton.Input active style={{ width: 64 }} />
                </div>
                <Skeleton.Input active style={{ width: 128 }} />
              </div>
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Skeleton.Avatar active size={40} shape="square" />
                      <Skeleton.Input active style={{ width: 128 }} />
                    </div>
                    <Skeleton.Input active style={{ width: 80 }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton.Input active style={{ width: 112 }} />
              <Skeleton.Button active shape="round" />
            </div>
            <div className="match-card overflow-hidden">
              <div className="h-12 bg-gray-50 border-b border-gray-200" />
              {[...Array(6)].map((_, i) => (
                <div key={i} className="px-3 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <Skeleton.Avatar active size="small" shape="circle" />
                    <Skeleton.Input active style={{ width: 160 }} />
                    <Skeleton.Input active style={{ width: 32 }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton.Input active style={{ width: 80 }} />
              <Skeleton.Button active shape="round" />
            </div>
            <div className="match-card divide-y divide-gray-200">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Skeleton.Avatar active size="small" shape="circle" />
                      <Skeleton.Input active style={{ width: 128 }} />
                    </div>
                    <div className="space-y-4">
                      {[1, 2].map((j) => (
                        <div key={j} className="flex items-center gap-3">
                          <Skeleton.Avatar active size={32} shape="square" />
                          <Skeleton.Input active style={{ width: 128 }} />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton.Avatar active size="small" shape="circle" />
                      <Skeleton.Input active style={{ width: 192 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
