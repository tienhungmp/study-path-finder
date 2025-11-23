import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (book: any) => void;
  book?: any;
}

export const BookModal = ({ isOpen, onClose, onSave, book }: BookModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    level: "",
    field: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    } else {
      setFormData({
        title: "",
        author: "",
        level: "",
        field: "",
        description: "",
        image: "",
      });
    }
  }, [book, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.author || !formData.level || !formData.field || !formData.description) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{book ? "Chỉnh Sửa Sách" : "Thêm Sách Mới"}</DialogTitle>
          <DialogDescription>
            {book ? "Cập nhật thông tin sách" : "Nhập thông tin chi tiết cho sách mới"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title">Tên sách *</Label>
            <Input
              id="title"
              placeholder="VD: Python Crash Course"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Tác giả *</Label>
            <Input
              id="author"
              placeholder="VD: Eric Matthes"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="level">Trình độ *</Label>
              <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
                <SelectTrigger id="level">
                  <SelectValue placeholder="Chọn trình độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="field">Lĩnh vực *</Label>
              <Select value={formData.field} onValueChange={(value) => setFormData({ ...formData, field: value })}>
                <SelectTrigger id="field">
                  <SelectValue placeholder="Chọn lĩnh vực" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Language">Language</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Arts">Arts</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">URL Ảnh</Label>
            <Input
              id="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả *</Label>
            <Textarea
              id="description"
              placeholder="Mô tả ngắn gọn về nội dung sách..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Hủy
            </Button>
            <Button type="submit" variant="gradient">
              {book ? "Cập Nhật" : "Thêm Sách"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
