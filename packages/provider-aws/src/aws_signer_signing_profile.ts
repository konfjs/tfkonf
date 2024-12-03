import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSignerSigningProfileArgsSignatureValidityPeriod {
  type: string;
  value: number;
}
export interface AwsSignerSigningProfileArgsSigningMaterial {
  certificate_arn: string;
}
export interface AwsSignerSigningProfileArgs {
  platform_id: string;
  tags?: {
    [key: string]: string;
  };
  signature_validity_period: AwsSignerSigningProfileArgsSignatureValidityPeriod;
  signing_material: AwsSignerSigningProfileArgsSigningMaterial;
}
export class aws_signer_signing_profile extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly platform_display_name!: string;
  readonly revocation_record!: any[];
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: string;
  readonly version_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSignerSigningProfileArgs) {
    super(config, "resource", args, resourceName, "aws_signer_signing_profile");
  }
}