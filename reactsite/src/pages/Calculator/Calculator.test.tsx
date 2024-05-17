import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './Calculator'; // Импорт компонента, который необходимо протестировать

describe('Calculator', () => {
  it('renders and uses the calculator correctly', () => {
    render(<Calculator />); // Рендеринг компонента

    // Проверяем, что поле ввода Initially пустое
    expect(screen.getByDisplayValue('')).toBeInTheDocument();

    // Нажимаем на кнопки и проверяем результат
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByDisplayValue('12')).toBeInTheDocument();
  
    // Очищаем поле ввода
    fireEvent.click(screen.getByText('Clear'));
    expect(screen.getByDisplayValue('')).toBeInTheDocument();

    // Проводим вычисления
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('12')).toBeInTheDocument(); // Ожидаем, что результат = 12
  });

  it('correctly displays "Clear" and removes it after 500ms', async () => {
    render(<Calculator />); // Рендеринг компонента
  
    fireEvent.click(screen.getByText('Clear')); // Нажатие кнопки "Clear"
    expect(screen.getByText('Clear')).toBeInTheDocument(); // Проверка, что "Clear" отображается
  
    await new Promise((r) => setTimeout(r, 510)); // 510ms так как, 500ms + 10ms запас
  
    expect(screen.queryByText('Clear')); // Ожидаем, что "Clear" больше не отображается
  });
  
});
