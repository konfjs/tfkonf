import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotBillingGroupArgsProperties {
  description?: string;
}
export interface AwsIotBillingGroupArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  properties: AwsIotBillingGroupArgsProperties;
}
export class aws_iot_billing_group extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly metadata!: any[];
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotBillingGroupArgs) {
    super(config, "resource", args, resourceName, "aws_iot_billing_group");
  }
}