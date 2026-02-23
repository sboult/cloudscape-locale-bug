import { useState, useMemo } from "react";
import Select, { type SelectProps } from "@cloudscape-design/components/select";

const COUNTRIES = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "México", value: "mx" },
];

// Normalize text by removing accents/diacritics
const normalizeText = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

function App() {
  const [selectedOption, setSelectedOption] = useState<SelectProps.Option | null>(null);
  const [filteringText, setFilteringText] = useState("");

  // Custom filtering with accent-insensitive matching
  const filteredOptions = useMemo(() => {
    if (!filteringText) return COUNTRIES;
    
    const normalizedFilter = normalizeText(filteringText);
    
    return COUNTRIES.filter((option) => {
      const normalizedLabel = normalizeText(option.label);
      return normalizedLabel.includes(normalizedFilter);
    });
  }, [filteringText]);

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Country Autocomplete</h2>
      <Select
        selectedOption={selectedOption}
        onChange={({ detail }) => {
          setSelectedOption(detail.selectedOption);
          setFilteringText("");
        }}
        options={filteredOptions}
        filteringType="manual"
        onLoadItems={({ detail }) => setFilteringText(detail.filteringText)}
        placeholder="Select a country"
        expandToViewport
        empty="No countries found"
      />
    </div>
  );
}

export default App;
