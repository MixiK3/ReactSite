// tests/FormAuf.test.tsx

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FormAuf from "./FormAuf"; // Путь к вашему файлу компонента

describe("FormAuf Component", () => {
  it("should render form elements correctly", () => {
    render(<FormAuf />);

    expect(screen.getByLabelText(/Имя:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Возраст:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Сохранить/i })).toBeInTheDocument();
  });

  it("should display validation errors for empty form fields", async () => {
    render(<FormAuf />);

    fireEvent.click(screen.getByRole('button', { name: /Сохранить/i }));

   
  });

  it("should allow valid form submission", async () => {
    render(<FormAuf />);

    fireEvent.change(screen.getByLabelText(/Имя:/i), { target: { value: 'Valid Name' } });
    fireEvent.change(screen.getByLabelText(/Возраст:/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'test@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /Сохранить/i }));

  });

  it("should add new element to list after form submission", async () => {
    render(<FormAuf />);

    fireEvent.change(screen.getByLabelText(/Имя:/i), { target: { value: 'New Name' } });
    fireEvent.change(screen.getByLabelText(/Возраст:/i), { target: { value: '30' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'new@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /Сохранить/i }));

    await waitFor(() => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(1);
      expect(listItems[0]).toHaveTextContent('New Name');
      expect(listItems[0]).toHaveTextContent('30');
      expect(listItems[0]).toHaveTextContent('new@example.com');
    });
  });
});
