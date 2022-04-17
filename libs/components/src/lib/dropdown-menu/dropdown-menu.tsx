import * as RadDropdownMenu from '@radix-ui/react-dropdown-menu';

/* eslint-disable-next-line */
export interface DropdownMenuProps {}

const items = [
  {
    label: 'Item 1',
  },
  {
    label: 'Item 2',
  },
  {
    label: 'Item 3',
  },
];

export function DropdownMenu(props: DropdownMenuProps) {
  return (
    <RadDropdownMenu.Root>
      <RadDropdownMenu.Trigger></RadDropdownMenu.Trigger>

      <RadDropdownMenu.Content>
        {items.map(({ label }) => {
          return (
            <RadDropdownMenu.Item key={label}>{label}</RadDropdownMenu.Item>
          );
        })}
      </RadDropdownMenu.Content>
    </RadDropdownMenu.Root>
  );
}

export default DropdownMenu;
