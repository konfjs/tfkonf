import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsChimesdkvoiceSipMediaApplicationArgsEndpoints {
  lambda_arn: string;
}
export interface AwsChimesdkvoiceSipMediaApplicationArgs {
  aws_region: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  endpoints: AwsChimesdkvoiceSipMediaApplicationArgsEndpoints;
}
export class aws_chimesdkvoice_sip_media_application extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimesdkvoiceSipMediaApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_chimesdkvoice_sip_media_application");
  }
}