import { TerraformConfig, TerraformResource } from "tfs";
export interface KmsKeyDetails {
  encryption_option?: string;
  kms_key_id?: string;
}
export interface Bitbucket {
  connection_arn: string;
  name: string;
  owner: string;
}
export interface Codecommit {
  name: string;
}
export interface GithubEnterpriseServer {
  connection_arn: string;
  name: string;
  owner: string;
}
export interface S3Bucket {
  bucket_name: string;
  name: string;
}
export interface Repository {
  bitbucket: Bitbucket;
  codecommit: Codecommit;
  github_enterprise_server: GithubEnterpriseServer;
  s3_bucket: S3Bucket;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgs {
  tags?: {
    [key: string]: string;
  };
  kms_key_details: KmsKeyDetails;
  repository: Repository;
  timeouts: Timeouts;
}
export class aws_codegurureviewer_repository_association extends TerraformResource {
  readonly arn!: string;
  readonly association_id!: string;
  readonly connection_arn!: string;
  readonly id?: string;
  readonly name!: string;
  readonly owner!: string;
  readonly provider_type!: string;
  readonly s3_repository_details!: any[];
  readonly state!: string;
  readonly state_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodegurureviewerRepositoryAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_codegurureviewer_repository_association");
  }
}