import { Garnish } from './Garnish';
import { OldFashionedGarnish } from './OldFashionedGarnish';
import { Pour } from './Pour';
import { Shake } from './Shake';
import { ShakerPlus } from './ShakerPlus';
import { ShakerPour } from './ShakerPour';

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
      return <Shake />;
    case 'shaker-add':
      return <ShakerPlus />;
    case 'old-fashioned-garnish':
      return <OldFashionedGarnish />;
    case 'shaker-pour':
      return <ShakerPour />;

    default:
      return <>{icon}</>;
  }
};
