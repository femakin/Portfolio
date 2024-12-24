3.  FlatList with Infinite Scroll

        •	Modification: Instead of fetching data, predefine a large dataset (e.g., an array of 100 items). Simulate “loading” more items by slicing the array as the user scrolls.
        •	Reasoning: Focuses on list rendering and infinite scroll logic.
        •	Example Input: Array.from({ length: 100 }, (_, i) => Item ${i + 1})

    Objective
    To implement a dynamic list component in React Native using the FlatList component. This challenge focuses on rendering large datasets efficiently and simulating infinite scrolling by loading more items as the user scrolls.

Requirements

1. Predefined Dataset:
   - Use a large hardcoded dataset (e.g., an array of 100 items).
   - Example Input: Array.from({ length: 100 }, (\_, i) => Item ${i + 1}).
2. Infinite Scroll:
   - Render the dataset in chunks (e.g., 20 items at a time).
