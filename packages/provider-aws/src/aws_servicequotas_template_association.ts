import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicequotasTemplateAssociationArgs {
  skip_destroy?: boolean;
}

export class aws_servicequotas_template_association extends TerraformResource {
  readonly id!: string;
  readonly status!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsServicequotasTemplateAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_servicequotas_template_association");
  }
}
