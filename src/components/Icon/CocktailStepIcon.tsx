import { Garnish } from './Garnish';
import { Pour } from './Pour';
import { Shaker } from './Shaker';

export type CocktailStepIconProps = {
  icon: string;
};

export const CocktailStepIcon = (props: CocktailStepIconProps) => {
  const { icon } = props;

  switch (icon) {
    case 'garnish':
      return <Garnish />;
    case 'pour':
      return <Pour />;
    case 'shake':
      return <Shaker />;

    default:
      return <>{icon}</>;
  }
};
