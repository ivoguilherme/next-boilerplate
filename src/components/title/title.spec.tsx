import Title, { ITitle } from './title';
import { render, screen } from '@testing-library/react';

describe('Title - Unit tests', () => {
  const renderComponent = ({ text }: ITitle) => {
    render(<Title text={text} />);
  };

  it('Should be render correctly', () => {
    // Given that render component with Application title
    renderComponent({ text: 'Application' });

    // And select element by text
    const title = screen.getByText('Application');

    // Then the title must be in the document
    expect(title).toBeInTheDocument();
  });
});
