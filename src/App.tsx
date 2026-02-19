import { useState } from "react";
import Select, { type SelectProps } from "@cloudscape-design/components/select";

const COUNTRIES = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "México", value: "mx" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState<SelectProps.Option | null>(null);

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Country Autocomplete</h2>
      <Select
        selectedOption={selectedOption}
        onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
        options={COUNTRIES}
        filteringType="auto"
        placeholder="Select a country"
        expandToViewport
        empty="No countries found"
      />
    </div>
  );
}

export default App;
