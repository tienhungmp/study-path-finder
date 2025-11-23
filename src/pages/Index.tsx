import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, GraduationCap, Target, Lightbulb } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: "",
    level: "",
    goal: "",
    field: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject || !formData.level || !formData.goal || !formData.field) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    toast.success("Đang tạo gợi ý cho bạn...");
    navigate("/results", { state: formData });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-5 h-5" />
            <span className="text-sm font-medium">Hệ thống gợi ý học tập thông minh</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            Lộ Trình Học Tập Của Bạn
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nhập thông tin nhu cầu học tập của bạn, chúng tôi sẽ gợi ý sách và lộ trình phù hợp nhất
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-md border border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            <BookOpen className="w-10 h-10 text-primary mb-3" />
            <h3 className="text-3xl font-bold mb-1">10,000+</h3>
            <p className="text-muted-foreground">Đầu sách</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-md border border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <GraduationCap className="w-10 h-10 text-secondary mb-3" />
            <h3 className="text-3xl font-bold mb-1">50,000+</h3>
            <p className="text-muted-foreground">Học viên</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-md border border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Target className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-3xl font-bold mb-1">95%</h3>
            <p className="text-muted-foreground">Đạt mục tiêu</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-lg p-8 border border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-base font-semibold">Môn học / Chủ đề</Label>
              <Input
                id="subject"
                placeholder="VD: Lập trình Python, Marketing Digital..."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="level" className="text-base font-semibold">Trình độ hiện tại</Label>
              <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
                <SelectTrigger id="level" className="h-12">
                  <SelectValue placeholder="Chọn trình độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Mới bắt đầu</SelectItem>
                  <SelectItem value="intermediate">Trung cấp</SelectItem>
                  <SelectItem value="advanced">Nâng cao</SelectItem>
                  <SelectItem value="expert">Chuyên gia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal" className="text-base font-semibold">Mục tiêu học tập</Label>
              <Input
                id="goal"
                placeholder="VD: Tìm việc làm, Chuyển ngành, Nâng cao kỹ năng..."
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="field" className="text-base font-semibold">Lĩnh vực</Label>
              <Select value={formData.field} onValueChange={(value) => setFormData({ ...formData, field: value })}>
                <SelectTrigger id="field" className="h-12">
                  <SelectValue placeholder="Chọn lĩnh vực" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Công nghệ</SelectItem>
                  <SelectItem value="business">Kinh doanh</SelectItem>
                  <SelectItem value="design">Thiết kế</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="language">Ngoại ngữ</SelectItem>
                  <SelectItem value="science">Khoa học</SelectItem>
                  <SelectItem value="arts">Nghệ thuật</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" variant="gradient" size="lg" className="w-full text-base font-semibold">
              <Lightbulb className="w-5 h-5" />
              Nhận Gợi Ý Ngay
            </Button>
          </form>
        </div>

        {/* CTA Links */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-muted-foreground">
            <Button variant="link" onClick={() => navigate("/login")} className="p-0 h-auto font-medium">
              Đăng nhập / Đăng ký
            </Button>
            {" • "}
            <Button variant="link" onClick={() => navigate("/history")} className="p-0 h-auto">
              Xem lịch sử
            </Button>
          </p>
          <p className="text-sm text-muted-foreground">
            <Button variant="link" onClick={() => navigate("/admin/login")} className="p-0 h-auto text-sm">
              Đăng nhập quản trị
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
