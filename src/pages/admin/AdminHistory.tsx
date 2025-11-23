import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, Eye, User } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

const AdminHistory = () => {
  const navigate = useNavigate();

  const historyData = [
    {
      id: 1,
      date: "2025-01-15 14:30",
      user: "Nguyễn Văn A",
      subject: "Python Programming",
      level: "Beginner",
      goal: "Tìm việc làm",
      field: "Technology",
    },
    {
      id: 2,
      date: "2025-01-15 12:15",
      user: "Trần Thị B",
      subject: "Digital Marketing",
      level: "Intermediate",
      goal: "Nâng cao kỹ năng",
      field: "Marketing",
    },
    {
      id: 3,
      date: "2025-01-15 09:45",
      user: "Lê Văn C",
      subject: "UI/UX Design",
      level: "Beginner",
      goal: "Chuyển ngành",
      field: "Design",
    },
    {
      id: 4,
      date: "2025-01-14 16:20",
      user: "Phạm Thị D",
      subject: "Data Science",
      level: "Advanced",
      goal: "Nâng cao kỹ năng",
      field: "Technology",
    },
    {
      id: 5,
      date: "2025-01-14 14:10",
      user: "Hoàng Văn E",
      subject: "English Communication",
      level: "Intermediate",
      goal: "Du học",
      field: "Language",
    },
  ];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-card border-b border-border shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary">
              Lịch Sử Gợi Ý
            </h1>
            <p className="text-muted-foreground">Quản lý tất cả lịch sử gợi ý của người dùng</p>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Tất cả lịch sử gợi ý
              </CardTitle>
              <CardDescription>
                Xem chi tiết và quản lý các gợi ý đã được tạo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Thời gian</TableHead>
                      <TableHead>Người dùng</TableHead>
                      <TableHead>Môn học</TableHead>
                      <TableHead>Trình độ</TableHead>
                      <TableHead>Mục tiêu</TableHead>
                      <TableHead>Lĩnh vực</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {historyData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            {item.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            {item.user}
                          </div>
                        </TableCell>
                        <TableCell>{item.subject}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.level}</Badge>
                        </TableCell>
                        <TableCell>{item.goal}</TableCell>
                        <TableCell>
                          <Badge className="bg-gradient-secondary">{item.field}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/detail/${item.id}`)}
                          >
                            <Eye className="w-4 h-4" />
                            Xem
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminHistory;
