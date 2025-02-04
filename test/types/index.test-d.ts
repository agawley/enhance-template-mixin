import { TemplateMixin } from "../../index";

class GoodBaseClass {
  declare render: () => void;
  declare html: (str: string, ...values: any[]) => string;
  constructor(...args: any[]) {}
}

class TemplateTest extends TemplateMixin(GoodBaseClass) {}

const testInstance: TemplateTest = new TemplateTest();

const a: HTMLElement = testInstance.template;
const b: () => void = testInstance.render;

// Template test extends GoodBaseClass
const testInstance2: GoodBaseClass = new TemplateTest();

// @ts-expect-error - template is not a property of GoodBaseClass
const c: TemplateTest = new GoodBaseClass();
