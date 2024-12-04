import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailCertificateArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_lightsail_certificate extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly domain_name?: string;
  readonly domain_validation_options!: any[];
  readonly id?: string;
  readonly subject_alternative_names?: string[];
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_certificate");
  }
}
