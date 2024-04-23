import { useContext } from 'react';
import { Context } from '@/pages/_app';

// Создаем хук useStore для доступа к экземпляру хранилища из контекста
export default function useStore() {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useStore must be used within an AppContext Provider');
  }
  return context.store; // Возвращаем экземпляр хранилища из контекста
}
