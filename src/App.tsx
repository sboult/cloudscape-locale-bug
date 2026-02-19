import { useState } from "react";
import Select, { type SelectProps } from "@cloudscape-design/components/select";

const COUNTRIES = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Italy", value: "it" },
  { label: "Spain", value: "es" },
  { label: "Mexico", value: "mx" },
  { label: "Brazil", value: "br" },
  { label: "Argentina", value: "ar" },
  { label: "Japan", value: "jp" },
  { label: "China", value: "cn" },
  { label: "India", value: "in" },
  { label: "South Korea", value: "kr" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState<SelectProps.Option | null>(null);
  const [filteringText, setFilteringText] = useState("");

  const filteredOptions = COUNTRIES.filter((country) =>
    country.label.toLowerCase().includes(filteringText.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Country Autocomplete</h2>
      <Select
        selectedOption={selectedOption}
        onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
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
