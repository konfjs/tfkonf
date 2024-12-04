import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotCaCertificateArgsRegistrationConfig {
  role_arn?: string;
  template_body?: string;
  template_name?: string;
}

export interface AwsIotCaCertificateArgs {
  active: boolean;
  allow_auto_registration: boolean;
  ca_certificate_pem: string;
  certificate_mode?: string;
  tags?: { [key: string]: string };
  verification_certificate_pem?: string;
  registration_config: AwsIotCaCertificateArgsRegistrationConfig;
}

export class aws_iot_ca_certificate extends TerraformResource {
  readonly arn!: string;
  readonly customer_version!: number;
  readonly generation_id!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly validity!: any[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsIotCaCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_iot_ca_certificate");
  }
}
