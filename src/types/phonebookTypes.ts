interface PersonEntry {
  name: string;
  number: string;
  id: number;
}

interface PersonProps {
  persons: PersonEntry[];
  setPersons: React.Dispatch<React.SetStateAction<PersonEntry[]>>;
}

interface FilteredProps {
  filteredResults: PersonEntry[];
  setFilteredResults: React.Dispatch<React.SetStateAction<PersonEntry[]>>;
}

interface SearchProps {
  setFilteredResults: React.Dispatch<React.SetStateAction<PersonEntry[]>>;
  persons: PersonEntry[];
}

interface PersonDisplay extends PersonProps {
  filteredResults: PersonEntry[];
}

interface NumberProp extends PersonProps {
  person: PersonEntry;
}

export type {
  PersonEntry,
  PersonProps,
  NumberProp,
  FilteredProps,
  SearchProps,
  PersonDisplay,
};
