import { render,screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

test("Should load contact Us page",() => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument(); 
});

test("Should load button",() => {
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument(); 
});