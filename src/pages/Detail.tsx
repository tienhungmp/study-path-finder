import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, ChevronLeft, BookOpen, Calendar, User } from "lucide-react";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data (same as Results page)
  const books = [
    {
      id: 1,
      title: "Python Crash Course",
      author: "Eric Matthes",
      description: "Giáo trình học Python nhanh và hiệu quả, từ cơ bản đến nâng cao với các dự án thực tế",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=400&fit=crop",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Fluent Python",
      author: "Luciano Ramalho",
      description: "Học cách viết code Python hiệu quả và pythonic, phù hợp cho người đã có kiến thức cơ bản",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      author: "Wes McKinney",
      description: "Phân tích dữ liệu với Python, pandas, NumPy và IPython - công cụ thiết yếu cho Data Scientist",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop",
      level: "Advanced",
    },
  ];

  const timeline = [
    { phase: "Giai đoạn 1", duration: "Tuần 1-4", title: "Nền tảng cơ bản", description: "Học cú pháp, biến, vòng lặp và hàm" },
    { phase: "Giai đoạn 2", duration: "Tuần 5-8", title: "Lập trình hướng đối tượng", description: "Classes, objects, inheritance" },
    { phase: "Giai đoạn 3", duration: "Tuần 9-12", title: "Làm việc với dữ liệu", description: "File handling, databases, APIs" },
    { phase: "Giai đoạn 4", duration: "Tuần 13-16", title: "Dự án thực tế", description: "Xây dựng ứng dụng hoàn chỉnh" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate("/history")}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary">
                Chi Tiết Gợi Ý #{id}
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
        {/* Original Request Info */}
        <Card className="mb-8 shadow-md border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Thông tin gợi ý
            </CardTitle>
            <CardDescription>Ngày: 15/01/2025 14:30</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Môn học</p>
                <Badge variant="outline" className="text-sm">Python Programming</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Trình độ</p>
                <Badge variant="outline" className="text-sm">Beginner</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Mục tiêu</p>
                <Badge variant="outline" className="text-sm">Tìm việc làm</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Lĩnh vực</p>
                <Badge variant="outline" className="text-sm">Technology</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Books Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Sách Đã Gợi Ý
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                <div className="h-64 overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-gradient-primary">{book.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{book.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {book.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-secondary" />
            Lộ Trình Đã Gợi Ý
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-primary rounded-full" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-5 w-7 h-7 bg-primary rounded-full border-4 border-background shadow-md flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{item.phase}</Badge>
                        <span className="text-sm text-muted-foreground">{item.duration}</span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center">
          <Button variant="outline" onClick={() => navigate("/history")}>
            <ChevronLeft className="w-4 h-4" />
            Quay lại lịch sử
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
