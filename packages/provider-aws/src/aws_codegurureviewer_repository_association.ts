import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodegurureviewerRepositoryAssociationArgsKmsKeyDetails {
  encryption_option?: string;
  kms_key_id?: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryBitbucket {
  connection_arn: string;
  name: string;
  owner: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryCodecommit {
  name: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryGithubEnterpriseServer {
  connection_arn: string;
  name: string;
  owner: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryS3Bucket {
  bucket_name: string;
  name: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsRepository {
  bitbucket: AwsCodegurureviewerRepositoryAssociationArgsRepositoryBitbucket;
  codecommit: AwsCodegurureviewerRepositoryAssociationArgsRepositoryCodecommit;
  github_enterprise_server: AwsCodegurureviewerRepositoryAssociationArgsRepositoryGithubEnterpriseServer;
  s3_bucket: AwsCodegurureviewerRepositoryAssociationArgsRepositoryS3Bucket;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgs {
  tags?: {
    [key: string]: string;
  };
  kms_key_details: AwsCodegurureviewerRepositoryAssociationArgsKmsKeyDetails;
  repository: AwsCodegurureviewerRepositoryAssociationArgsRepository;
  timeouts: AwsCodegurureviewerRepositoryAssociationArgsTimeouts;
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