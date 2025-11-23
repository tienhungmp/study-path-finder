import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Clock, BookOpen, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Clock, label: "Lịch Sử", path: "/admin/history" },
    { icon: BookOpen, label: "Quản Lý Sách", path: "/admin/books" },
  ];

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col transition-all duration-300",
          isCollapsed ? "w-0 lg:w-20" : "w-64",
          "fixed lg:sticky top-0 z-40"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <h2 className={cn(
            "font-bold text-xl bg-clip-text text-transparent bg-gradient-primary transition-opacity duration-300",
            isCollapsed && "lg:opacity-0"
          )}>
            Admin Panel
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Button
                key={item.path}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent",
                  isActive && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
                  isCollapsed && "lg:justify-center lg:px-2"
                )}
                onClick={() => navigate(item.path)}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className={cn(
                  "transition-opacity duration-300",
                  isCollapsed && "lg:hidden"
                )}>
                  {item.label}
                </span>
              </Button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent",
              isCollapsed && "lg:justify-center lg:px-2"
            )}
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className={cn(
              "transition-opacity duration-300",
              isCollapsed && "lg:hidden"
            )}>
              Đăng xuất
            </span>
          </Button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};
