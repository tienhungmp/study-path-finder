import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Clock, BarChart3, Library } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Tổng sách", value: "10,245", icon: BookOpen, color: "text-primary", change: "+12%" },
    { title: "Người dùng", value: "52,847", icon: Users, color: "text-secondary", change: "+8%" },
    { title: "Gợi ý trong tháng", value: "3,428", icon: TrendingUp, color: "text-accent", change: "+23%" },
    { title: "Tổng gợi ý", value: "125,943", icon: Clock, color: "text-primary", change: "+15%" },
  ];

  const recentActivity = [
    { user: "Nguyễn Văn A", action: "Nhận gợi ý Python", time: "5 phút trước" },
    { user: "Trần Thị B", action: "Nhận gợi ý Marketing", time: "12 phút trước" },
    { user: "Lê Văn C", action: "Nhận gợi ý Design", time: "25 phút trước" },
    { user: "Phạm Thị D", action: "Nhận gợi ý Data Science", time: "1 giờ trước" },
  ];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-card border-b border-border shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary">
              Dashboard
            </h1>
            <p className="text-muted-foreground">Tổng quan hệ thống gợi ý học tập</p>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-secondary font-semibold">{stat.change}</span> so với tháng trước
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Lượt gợi ý theo tháng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gradient-hero rounded-lg">
                  <p className="text-muted-foreground">Biểu đồ cột sẽ hiển thị ở đây</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Library className="w-5 h-5 text-secondary" />
                  Sách được gợi ý nhiều nhất
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gradient-hero rounded-lg">
                  <p className="text-muted-foreground">Biểu đồ tròn sẽ hiển thị ở đây</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Hoạt động gần đây
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.user}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
