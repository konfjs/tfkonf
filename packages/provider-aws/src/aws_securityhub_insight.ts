import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAccountId {
  comparison: string;
  value: string;
}
export interface CompanyName {
  comparison: string;
  value: string;
}
export interface ComplianceStatus {
  comparison: string;
  value: string;
}
export interface Confidence {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface CreatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface Criticality {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface Description {
  comparison: string;
  value: string;
}
export interface FindingProviderFieldsConfidence {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface FindingProviderFieldsCriticality {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface FindingProviderFieldsRelatedFindingsId {
  comparison: string;
  value: string;
}
export interface FindingProviderFieldsRelatedFindingsProductArn {
  comparison: string;
  value: string;
}
export interface FindingProviderFieldsSeverityLabel {
  comparison: string;
  value: string;
}
export interface FindingProviderFieldsSeverityOriginal {
  comparison: string;
  value: string;
}
export interface FindingProviderFieldsTypes {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface FirstObservedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface GeneratorId {
  comparison: string;
  value: string;
}
export interface Id {
  comparison: string;
  value: string;
}
export interface Keyword {
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface LastObservedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface MalwareName {
  comparison: string;
  value: string;
}
export interface MalwarePath {
  comparison: string;
  value: string;
}
export interface MalwareState {
  comparison: string;
  value: string;
}
export interface MalwareType {
  comparison: string;
  value: string;
}
export interface NetworkDestinationDomain {
  comparison: string;
  value: string;
}
export interface NetworkDestinationIpv4 {
  cidr: string;
}
export interface NetworkDestinationIpv6 {
  cidr: string;
}
export interface NetworkDestinationPort {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface NetworkDirection {
  comparison: string;
  value: string;
}
export interface NetworkProtocol {
  comparison: string;
  value: string;
}
export interface NetworkSourceDomain {
  comparison: string;
  value: string;
}
export interface NetworkSourceIpv4 {
  cidr: string;
}
export interface NetworkSourceIpv6 {
  cidr: string;
}
export interface NetworkSourceMac {
  comparison: string;
  value: string;
}
export interface NetworkSourcePort {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface NoteText {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface NoteUpdatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface NoteUpdatedBy {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface ProcessLaunchedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface ProcessName {
  comparison: string;
  value: string;
}
export interface ProcessParentPid {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface ProcessPath {
  comparison: string;
  value: string;
}
export interface ProcessPid {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface ProcessTerminatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface ProductArn {
  comparison: string;
  value: string;
}
export interface ProductFields {
  comparison: string;
  key: string;
  value: string;
}
export interface ProductName {
  comparison: string;
  value: string;
}
export interface RecommendationText {
  comparison: string;
  value: string;
}
export interface RecordState {
  comparison: string;
  value: string;
}
export interface RelatedFindingsId {
  comparison: string;
  value: string;
}
export interface RelatedFindingsProductArn {
  comparison: string;
  value: string;
}
export interface ResourceAwsEc2InstanceIamInstanceProfileArn {
  comparison: string;
  value: string;
}
export interface ResourceAwsEc2InstanceImageId {
  comparison: string;
  value: string;
}
export interface ResourceAwsEc2InstanceIpv4Addresses {
  cidr: string;
}
export interface ResourceAwsEc2InstanceIpv6Addresses {
  cidr: string;
}
export interface ResourceAwsEc2InstanceKeyName {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface ResourceAwsEc2InstanceLaunchedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface ResourceAwsEc2InstanceSubnetId {
  comparison: string;
  value: string;
}
export interface ResourceAwsEc2InstanceType {
  comparison: string;
  value: string;
}
export interface ResourceAwsEc2InstanceVpcId {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface ResourceAwsIamAccessKeyCreatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface ResourceAwsIamAccessKeyStatus {
  comparison: string;
  value: string;
}
export interface ResourceAwsIamAccessKeyUserName {
  comparison: string;
  value: string;
}
export interface ResourceAwsS3BucketOwnerId {
  comparison: string;
  value: string;
}
export interface ResourceAwsS3BucketOwnerName {
  comparison: string;
  value: string;
}
export interface ResourceContainerImageId {
  comparison: string;
  value: string;
}
export interface ResourceContainerImageName {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface ResourceContainerLaunchedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface ResourceContainerName {
  comparison: string;
  value: string;
}
export interface ResourceDetailsOther {
  comparison: string;
  key: string;
  value: string;
}
export interface ResourceId {
  comparison: string;
  value: string;
}
export interface ResourcePartition {
  comparison: string;
  value: string;
}
export interface ResourceRegion {
  comparison: string;
  value: string;
}
export interface ResourceTags {
  comparison: string;
  key: string;
  value: string;
}
export interface ResourceType {
  comparison: string;
  value: string;
}
export interface SeverityLabel {
  comparison: string;
  value: string;
}
export interface SourceUrl {
  comparison: string;
  value: string;
}
export interface ThreatIntelIndicatorCategory {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface ThreatIntelIndicatorLastObservedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface ThreatIntelIndicatorSource {
  comparison: string;
  value: string;
}
export interface ThreatIntelIndicatorSourceUrl {
  comparison: string;
  value: string;
}
export interface ThreatIntelIndicatorType {
  comparison: string;
  value: string;
}
export interface ThreatIntelIndicatorValue {
  comparison: string;
  value: string;
}
export interface Title {
  comparison: string;
  value: string;
}
export interface Type {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface UpdatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface UserDefinedValues {
  comparison: string;
  key: string;
  value: string;
}
export interface VerificationState {
  comparison: string;
  value: string;
}
export interface WorkflowStatus {
  comparison: string;
  value: string;
}
export interface Filters {
  aws_account_id: AwsAccountId;
  company_name: CompanyName;
  compliance_status: ComplianceStatus;
  confidence: Confidence;
  created_at: CreatedAt;
  criticality: Criticality;
  description: Description;
  finding_provider_fields_confidence: FindingProviderFieldsConfidence;
  finding_provider_fields_criticality: FindingProviderFieldsCriticality;
  finding_provider_fields_related_findings_id: FindingProviderFieldsRelatedFindingsId;
  finding_provider_fields_related_findings_product_arn: FindingProviderFieldsRelatedFindingsProductArn;
  finding_provider_fields_severity_label: FindingProviderFieldsSeverityLabel;
  finding_provider_fields_severity_original: FindingProviderFieldsSeverityOriginal;
  finding_provider_fields_types: FindingProviderFieldsTypes;
  first_observed_at: FirstObservedAt;
  generator_id: GeneratorId;
  id: Id;
  keyword: Keyword;
  last_observed_at: LastObservedAt;
  malware_name: MalwareName;
  malware_path: MalwarePath;
  malware_state: MalwareState;
  malware_type: MalwareType;
  network_destination_domain: NetworkDestinationDomain;
  network_destination_ipv4: NetworkDestinationIpv4;
  network_destination_ipv6: NetworkDestinationIpv6;
  network_destination_port: NetworkDestinationPort;
  network_direction: NetworkDirection;
  network_protocol: NetworkProtocol;
  network_source_domain: NetworkSourceDomain;
  network_source_ipv4: NetworkSourceIpv4;
  network_source_ipv6: NetworkSourceIpv6;
  network_source_mac: NetworkSourceMac;
  network_source_port: NetworkSourcePort;
  note_text: NoteText;
  note_updated_at: NoteUpdatedAt;
  note_updated_by: NoteUpdatedBy;
  process_launched_at: ProcessLaunchedAt;
  process_name: ProcessName;
  process_parent_pid: ProcessParentPid;
  process_path: ProcessPath;
  process_pid: ProcessPid;
  process_terminated_at: ProcessTerminatedAt;
  product_arn: ProductArn;
  product_fields: ProductFields;
  product_name: ProductName;
  recommendation_text: RecommendationText;
  record_state: RecordState;
  related_findings_id: RelatedFindingsId;
  related_findings_product_arn: RelatedFindingsProductArn;
  resource_aws_ec2_instance_iam_instance_profile_arn: ResourceAwsEc2InstanceIamInstanceProfileArn;
  resource_aws_ec2_instance_image_id: ResourceAwsEc2InstanceImageId;
  resource_aws_ec2_instance_ipv4_addresses: ResourceAwsEc2InstanceIpv4Addresses;
  resource_aws_ec2_instance_ipv6_addresses: ResourceAwsEc2InstanceIpv6Addresses;
  resource_aws_ec2_instance_key_name: ResourceAwsEc2InstanceKeyName;
  resource_aws_ec2_instance_launched_at: ResourceAwsEc2InstanceLaunchedAt;
  resource_aws_ec2_instance_subnet_id: ResourceAwsEc2InstanceSubnetId;
  resource_aws_ec2_instance_type: ResourceAwsEc2InstanceType;
  resource_aws_ec2_instance_vpc_id: ResourceAwsEc2InstanceVpcId;
  resource_aws_iam_access_key_created_at: ResourceAwsIamAccessKeyCreatedAt;
  resource_aws_iam_access_key_status: ResourceAwsIamAccessKeyStatus;
  resource_aws_iam_access_key_user_name: ResourceAwsIamAccessKeyUserName;
  resource_aws_s3_bucket_owner_id: ResourceAwsS3BucketOwnerId;
  resource_aws_s3_bucket_owner_name: ResourceAwsS3BucketOwnerName;
  resource_container_image_id: ResourceContainerImageId;
  resource_container_image_name: ResourceContainerImageName;
  resource_container_launched_at: ResourceContainerLaunchedAt;
  resource_container_name: ResourceContainerName;
  resource_details_other: ResourceDetailsOther;
  resource_id: ResourceId;
  resource_partition: ResourcePartition;
  resource_region: ResourceRegion;
  resource_tags: ResourceTags;
  resource_type: ResourceType;
  severity_label: SeverityLabel;
  source_url: SourceUrl;
  threat_intel_indicator_category: ThreatIntelIndicatorCategory;
  threat_intel_indicator_last_observed_at: ThreatIntelIndicatorLastObservedAt;
  threat_intel_indicator_source: ThreatIntelIndicatorSource;
  threat_intel_indicator_source_url: ThreatIntelIndicatorSourceUrl;
  threat_intel_indicator_type: ThreatIntelIndicatorType;
  threat_intel_indicator_value: ThreatIntelIndicatorValue;
  title: Title;
  type: Type;
  updated_at: UpdatedAt;
  user_defined_values: UserDefinedValues;
  verification_state: VerificationState;
  workflow_status: WorkflowStatus;
}
export interface AwsSecurityhubInsightArgs {
  group_by_attribute: string;
  name: string;
  filters: Filters;
}
export class aws_securityhub_insight extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubInsightArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_insight");
  }
}