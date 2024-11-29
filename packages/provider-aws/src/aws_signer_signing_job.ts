import { TerraformConfig, TerraformResource } from "tfs";
export interface S3 {
  bucket: string;
  prefix?: string;
}
export interface Destination {
  s3: S3;
}
export interface S3 {
  bucket: string;
  key: string;
  version: string;
}
export interface Source {
  s3: S3;
}
export interface AwsSignerSigningJobArgs {
  ignore_signing_job_failure?: boolean;
  profile_name: string;
  destination: Destination;
  source: Source;
}
export class aws_signer_signing_job extends TerraformResource {
  readonly completed_at!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly job_id!: string;
  readonly job_invoker!: string;
  readonly job_owner!: string;
  readonly platform_display_name!: string;
  readonly platform_id!: string;
  readonly profile_version!: string;
  readonly requested_by!: string;
  readonly revocation_record!: any[];
  readonly signature_expires_at!: string;
  readonly signed_object!: any[];
  readonly status!: string;
  readonly status_reason!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSignerSigningJobArgs) {
    super(config, "resource", args, resourceName, "aws_signer_signing_job");
  }
}