import { Image } from "ds-loud-ng";

const DEFAULT_PROPS = {
  person: {}
};

export const PersonImage = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props
  };

  return (
    <Image img={attrs.person.image_url} size="lg" type="round" />
  )
}
