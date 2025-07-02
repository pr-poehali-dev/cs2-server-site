import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cs2-purple to-cs2-blue rounded-lg flex items-center justify-center">
            <Icon name="Gamepad2" size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cs2-purple to-cs2-blue bg-clip-text text-transparent">
            CS2ProLeague
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-cs2-purple transition-colors font-medium"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-cs2-purple transition-colors font-medium"
          >
            VIP-привилегии
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-cs2-purple transition-colors font-medium"
          >
            Админка
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-cs2-purple transition-colors font-medium"
          >
            Сервер
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-cs2-purple transition-colors font-medium"
          >
            Помощь
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-cs2-purple text-cs2-purple hover:bg-cs2-purple hover:text-white"
          >
            <Icon name="User" size={16} className="mr-2" />
            Профиль
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-cs2-purple to-cs2-blue hover:from-cs2-blue hover:to-cs2-purple"
          >
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Донат
          </Button>
        </div>
      </div>
    </header>
  );
}
