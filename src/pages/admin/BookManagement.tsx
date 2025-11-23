import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Pencil, Trash2, User } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { BookModal } from "@/components/admin/BookModal";
import { toast } from "sonner";

const BookManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<any>(null);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Python Crash Course",
      author: "Eric Matthes",
      level: "Beginner",
      field: "Technology",
      description: "Giáo trình học Python nhanh và hiệu quả",
    },
    {
      id: 2,
      title: "Fluent Python",
      author: "Luciano Ramalho",
      level: "Intermediate",
      field: "Technology",
      description: "Học cách viết code Python hiệu quả",
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      author: "Wes McKinney",
      level: "Advanced",
      field: "Technology",
      description: "Phân tích dữ liệu với Python",
    },
  ]);

  const handleAddBook = () => {
    setEditingBook(null);
    setIsModalOpen(true);
  };

  const handleEditBook = (book: any) => {
    setEditingBook(book);
    setIsModalOpen(true);
  };

  const handleDeleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
    toast.success("Đã xóa sách thành công");
  };

  const handleSaveBook = (bookData: any) => {
    if (editingBook) {
      setBooks(books.map(book => book.id === editingBook.id ? { ...bookData, id: book.id } : book));
      toast.success("Đã cập nhật sách thành công");
    } else {
      setBooks([...books, { ...bookData, id: books.length + 1 }]);
      toast.success("Đã thêm sách mới thành công");
    }
    setIsModalOpen(false);
    setEditingBook(null);
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-card border-b border-border shadow-sm">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary">
                  Quản Lý Sách
                </h1>
                <p className="text-muted-foreground">Thêm, sửa, xóa sách trong hệ thống</p>
              </div>
              <Button variant="gradient" onClick={handleAddBook}>
                <Plus className="w-4 h-4" />
                Thêm Sách Mới
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Danh sách sách ({books.length})
              </CardTitle>
              <CardDescription>
                Quản lý toàn bộ sách trong hệ thống gợi ý
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>ID</TableHead>
                      <TableHead>Tên sách</TableHead>
                      <TableHead>Tác giả</TableHead>
                      <TableHead>Trình độ</TableHead>
                      <TableHead>Lĩnh vực</TableHead>
                      <TableHead>Mô tả</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {books.map((book) => (
                      <TableRow key={book.id} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="font-medium">#{book.id}</TableCell>
                        <TableCell className="font-semibold">{book.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            {book.author}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{book.level}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-gradient-secondary">{book.field}</Badge>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{book.description}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditBook(book)}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteBook(book.id)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
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

      <BookModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingBook(null);
        }}
        onSave={handleSaveBook}
        book={editingBook}
      />
    </div>
  );
};

export default BookManagement;
