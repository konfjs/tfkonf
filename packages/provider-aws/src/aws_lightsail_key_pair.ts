import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailKeyPairArgs {
  pgp_key?: string;
  tags?: { [key: string]: string };
}

export class aws_lightsail_key_pair extends TerraformResource {
  readonly arn!: string;
  readonly encrypted_fingerprint!: string;
  readonly encrypted_private_key!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly private_key!: string;
  readonly public_key?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailKeyPairArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_key_pair");
  }
}
