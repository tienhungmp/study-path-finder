import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Home, Clock, Eye, ChevronLeft } from "lucide-react";

const History = () => {
  const navigate = useNavigate();

  // Mock history data
  const historyData = [
    {
      id: 1,
      date: "2025-01-15 14:30",
      subject: "Python Programming",
      level: "Beginner",
      goal: "Tìm việc làm",
      field: "Technology",
    },
    {
      id: 2,
      date: "2025-01-10 09:15",
      subject: "Digital Marketing",
      level: "Intermediate",
      goal: "Nâng cao kỹ năng",
      field: "Marketing",
    },
    {
      id: 3,
      date: "2025-01-05 16:45",
      subject: "UI/UX Design",
      level: "Beginner",
      goal: "Chuyển ngành",
      field: "Design",
    },
    {
      id: 4,
      date: "2024-12-28 11:20",
      subject: "Data Science",
      level: "Advanced",
      goal: "Nâng cao kỹ năng",
      field: "Technology",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary">
                Lịch Sử Gợi Ý
              </h1>
            </div>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <Home className="w-4 h-4" />
              Trang chủ
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Các lần gợi ý trước đó
            </CardTitle>
            <CardDescription>
              Xem lại các gợi ý học tập bạn đã nhận từ hệ thống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Thời gian</TableHead>
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

        <div className="mt-6 text-center">
          <Button variant="gradient" onClick={() => navigate("/")}>
            Tạo Gợi Ý Mới
          </Button>
        </div>
      </div>
    </div>
  );
};

export default History;
