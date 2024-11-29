import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  delete?: string;
}
export interface AwsIamServerCertificateArgs {
  certificate_body: string;
  certificate_chain?: string;
  path?: string;
  private_key: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_iam_server_certificate extends TerraformResource {
  readonly arn!: string;
  readonly expiration!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly upload_date!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamServerCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_iam_server_certificate");
  }
}