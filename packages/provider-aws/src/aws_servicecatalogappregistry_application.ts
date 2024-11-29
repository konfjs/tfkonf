import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsServicecatalogappregistryApplicationArgs {
  description?: string;
  name: string;
}
export class aws_servicecatalogappregistry_application extends TerraformResource {
  readonly application_tag!: {
    [key: string]: string;
  };
  readonly arn!: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogappregistryApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalogappregistry_application");
  }
}