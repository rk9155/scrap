import { Card, Skeleton, Space } from "antd";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Skeleton.Input active style={{ width: 200 }} />
          <Skeleton.Input active style={{ width: 120 }} />
        </div>

        <Card>
          <Space direction="vertical" style={{ width: "100%" }} size="large">
            <Skeleton.Input active block />
            <div className="grid grid-cols-2 gap-8">
              <Space direction="vertical">
                <Skeleton.Avatar active size="large" />
                <Skeleton.Input active style={{ width: "75%" }} />
              </Space>
              <Space direction="vertical">
                <Skeleton.Avatar active size="large" />
                <Skeleton.Input active style={{ width: "75%" }} />
              </Space>
            </div>
          </Space>
        </Card>

        <Card>
          <Skeleton active paragraph={{ rows: 6 }} title={false} />
        </Card>
      </div>
    </div>
  );
}
