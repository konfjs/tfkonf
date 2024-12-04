import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicequotasTemplateArgs {
  quota_code: string;
  region: string;
  service_code: string;
  value: number;
}

export class aws_servicequotas_template extends TerraformResource {
  readonly global_quota!: boolean;
  readonly id!: string;
  readonly quota_name!: string;
  readonly service_name!: string;
  readonly unit!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsServicequotasTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_servicequotas_template");
  }
}
