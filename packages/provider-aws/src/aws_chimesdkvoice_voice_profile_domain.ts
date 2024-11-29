import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimesdkvoiceVoiceProfileDomainArgsServerSideEncryptionConfiguration {
  kms_key_arn: string;
}
export interface AwsChimesdkvoiceVoiceProfileDomainArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsChimesdkvoiceVoiceProfileDomainArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  server_side_encryption_configuration: AwsChimesdkvoiceVoiceProfileDomainArgsServerSideEncryptionConfiguration;
  timeouts: AwsChimesdkvoiceVoiceProfileDomainArgstimeouts;
}
export class aws_chimesdkvoice_voice_profile_domain extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimesdkvoiceVoiceProfileDomainArgs) {
    super(config, "resource", args, resourceName, "aws_chimesdkvoice_voice_profile_domain");
  }
}