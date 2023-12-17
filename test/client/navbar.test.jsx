import Navbar from "../../components/Navbar";
import { render } from "@testing-library/react";

const generateComponent = () => {
  return render(<Navbar />);
};

const socialIcons = [
  {
    text: "facebook",
    href: "https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436",
  },
  {
    text: "instagram",
    href: "https://www.instagram.com/dietrich_landcarellc/",
  },
];

const menuOptions = [
  {
    text: "Home",
    href: "http://localhost/",
  },
  {
    text: "Testimonials",
    href: "http://localhost/testimonials",
  },
  {
    text: "Contact",
    href: "http://localhost/contact",
  },
  {
    text: "Login",
    href: "http://localhost/login",
  },
];

describe("Navbar", () => {
  it("should render the entire navbar", () => {
    const { container } = generateComponent();
    expect(container).toBeTruthy();
  });
  it("should have a link to homepage", () => {
    const { getByTestId } = generateComponent();
    const linkElement = getByTestId("logo");
    expect(linkElement).toHaveProperty("href", "http://localhost/");
  });
  test.each(menuOptions)(
    `should have link to the $text menu`,
    ({ text, href }) => {
      const { getByText } = generateComponent();
      const element = getByText(text);
      expect(element).toHaveProperty("href", href);
    }
  );
  it("should have a link to the phone number", () => {
    const { getByTestId } = generateComponent();
    const element = getByTestId("phone");
    expect(element).toHaveProperty("href", "tel:14436083258");
  });
  test.each(socialIcons)(
    "should have link to social media accounts",
    ({ text, href }) => {
      const { getByTestId } = generateComponent();
      const element = getByTestId(text);
      expect(element).toHaveProperty("href", href);
    }
  );
});
