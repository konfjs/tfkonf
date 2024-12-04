import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsCiphertextArgs {
  context?: { [key: string]: string };
  key_id: string;
  plaintext: string;
}

export class aws_kms_ciphertext extends TerraformResource {
  readonly ciphertext_blob!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsCiphertextArgs) {
    super(config, "resource", args, resourceName, "aws_kms_ciphertext");
  }
}
