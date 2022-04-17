import * as RadTooltip from '@radix-ui/react-tooltip';

export interface IconWrapProps {
  label?: string;
  children: React.ReactNode;
}

export function IconWrap({ children, label }: IconWrapProps) {
  return (
    <RadTooltip.Provider>
      <RadTooltip.Root>
        <RadTooltip.Trigger>
          <div className="border-red-700">{children}</div>
        </RadTooltip.Trigger>
        <RadTooltip.Content>{label}</RadTooltip.Content>
      </RadTooltip.Root>
    </RadTooltip.Provider>
  );
}

export default IconWrap;
