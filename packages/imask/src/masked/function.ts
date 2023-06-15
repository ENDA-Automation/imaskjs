import Masked, { type MaskedOptions } from './base';
import IMask from '../core/holder';


export
type MaskedFunctionOptions = MaskedOptions<MaskedFunction>;

/** Masking by custom Function */
export default
class MaskedFunction<Value=any> extends Masked<Value> {
  declare mask: (value: string, masked: this) => boolean;
  override updateOptions (opts: Partial<MaskedFunctionOptions>) {
    super.updateOptions(opts);
  }

  override _update (opts: Partial<MaskedFunctionOptions>) {
    super._update({
      ...opts,
      validate: opts.mask,
    });
  }
}


IMask.MaskedFunction = MaskedFunction;