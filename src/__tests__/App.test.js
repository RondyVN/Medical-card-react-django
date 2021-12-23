import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout/Layout";

test("renders learn react link", () => {
    render(<Layout />);
    const linkElement = screen.getByText(/Create/i);
    expect(linkElement).toBeInTheDocument();
});