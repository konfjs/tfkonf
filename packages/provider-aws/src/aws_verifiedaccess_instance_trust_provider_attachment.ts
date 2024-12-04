import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessInstanceTrustProviderAttachmentArgs {
  verifiedaccess_instance_id: string;
  verifiedaccess_trust_provider_id: string;
}

export class aws_verifiedaccess_instance_trust_provider_attachment extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedaccessInstanceTrustProviderAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedaccess_instance_trust_provider_attachment");
  }
}
