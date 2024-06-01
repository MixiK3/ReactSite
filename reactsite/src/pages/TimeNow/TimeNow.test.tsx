import { render, act, waitFor, screen } from '@testing-library/react';
import { TimeNow } from './TimeNow';

describe('TimeNow Component', () => {
  it('renders current time correctly', async () => {
    render(<TimeNow />);
    
    const heading = screen.getByText((content, node:any) => {
      return node.tagName.toLowerCase() === 'h1' && /Сейчас/.test(content);
    });

    // Подождать, чтобы убедиться, что текст "Сейчас" содержится в элементе согласно ожиданиям
    await waitFor(() => {
      expect(heading).toBeInTheDocument();
    });

    // Теперь можно также обновить эту пользовательскую функцию для проверки времени
    const time = screen.getByText((content, node:any) => {
      return node.tagName.toLowerCase() === 'h1' && /\d{2}:\d{2}:\d{2}/.test(content);
    });

    await waitFor(() => {
      expect(time).toBeInTheDocument();
    });
  });
});
