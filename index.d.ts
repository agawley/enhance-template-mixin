/*
 *  TODO: When @enhance/base-element types are published, change
 *  'extends new (...args: any[]) => any' to 'extends BaseElement'
 */

export function TemplateMixin<BaseClass extends new (...args: any[]) => any>(
  Base: BaseClass
): new (
  ...args: ConstructorParameters<BaseClass>
) => InstanceType<BaseClass> & { template: HTMLElement };
