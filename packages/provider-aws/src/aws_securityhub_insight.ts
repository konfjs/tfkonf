import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecurityhubInsightArgsfiltersAwsAccountId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersCompanyName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersComplianceStatus {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersconfidence {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersCreatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersCreatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersCreatedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfilterscriticality {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersdescription {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersFindingProviderFieldsConfidence {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersFindingProviderFieldsCriticality {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersFindingProviderFieldsRelatedFindingsId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersFindingProviderFieldsRelatedFindingsProductArn {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersFindingProviderFieldsSeverityLabel {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersFindingProviderFieldsSeverityOriginal {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersFindingProviderFieldsTypes {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersFirstObservedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersFirstObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersFirstObservedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersGeneratorId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersid {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfilterskeyword {
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersLastObservedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersLastObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersLastObservedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersMalwareName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersMalwarePath {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersMalwareState {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersMalwareType {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkDestinationDomain {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkDestinationIpv4 {
  cidr: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkDestinationIpv6 {
  cidr: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkDestinationPort {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkDirection {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkProtocol {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkSourceDomain {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkSourceIpv4 {
  cidr: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkSourceIpv6 {
  cidr: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkSourceMac {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersNetworkSourcePort {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersNoteText {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersNoteUpdatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersNoteUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersNoteUpdatedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersNoteUpdatedBy {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersProcessLaunchedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersProcessLaunchedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersProcessLaunchedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersProcessName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersProcessParentPid {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersProcessPath {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersProcessPid {
  eq?: string;
  gte?: string;
  lte?: string;
}
export interface AwsSecurityhubInsightArgsfiltersProcessTerminatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersProcessTerminatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersProcessTerminatedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersProductArn {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersProductFields {
  comparison: string;
  key: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersProductName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersRecommendationText {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersRecordState {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersRelatedFindingsId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersRelatedFindingsProductArn {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceIamInstanceProfileArn {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceImageId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceIpv4Addresses {
  cidr: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceIpv6Addresses {
  cidr: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceKeyName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceLaunchedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceLaunchedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceLaunchedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceSubnetId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceType {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceVpcId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyCreatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyCreatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyCreatedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyStatus {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyUserName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsS3BucketOwnerId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceAwsS3BucketOwnerName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceContainerImageId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceContainerImageName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceContainerLaunchedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersResourceContainerLaunchedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersResourceContainerLaunchedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersResourceContainerName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceDetailsOther {
  comparison: string;
  key: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourcePartition {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceRegion {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceTags {
  comparison: string;
  key: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersResourceType {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersSeverityLabel {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersSourceUrl {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorCategory {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorLastObservedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorLastObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorLastObservedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorSource {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorSourceUrl {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorType {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorValue {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfilterstitle {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfilterstype {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersUpdatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubInsightArgsfiltersUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsfiltersUpdatedAtDateRange;
}
export interface AwsSecurityhubInsightArgsfiltersUserDefinedValues {
  comparison: string;
  key: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersVerificationState {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfiltersWorkflowStatus {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubInsightArgsfilters {
  aws_account_id: AwsSecurityhubInsightArgsfiltersAwsAccountId;
  company_name: AwsSecurityhubInsightArgsfiltersCompanyName;
  compliance_status: AwsSecurityhubInsightArgsfiltersComplianceStatus;
  confidence: AwsSecurityhubInsightArgsfiltersconfidence;
  created_at: AwsSecurityhubInsightArgsfiltersCreatedAt;
  criticality: AwsSecurityhubInsightArgsfilterscriticality;
  description: AwsSecurityhubInsightArgsfiltersdescription;
  finding_provider_fields_confidence: AwsSecurityhubInsightArgsfiltersFindingProviderFieldsConfidence;
  finding_provider_fields_criticality: AwsSecurityhubInsightArgsfiltersFindingProviderFieldsCriticality;
  finding_provider_fields_related_findings_id: AwsSecurityhubInsightArgsfiltersFindingProviderFieldsRelatedFindingsId;
  finding_provider_fields_related_findings_product_arn: AwsSecurityhubInsightArgsfiltersFindingProviderFieldsRelatedFindingsProductArn;
  finding_provider_fields_severity_label: AwsSecurityhubInsightArgsfiltersFindingProviderFieldsSeverityLabel;
  finding_provider_fields_severity_original: AwsSecurityhubInsightArgsfiltersFindingProviderFieldsSeverityOriginal;
  finding_provider_fields_types: AwsSecurityhubInsightArgsfiltersFindingProviderFieldsTypes;
  first_observed_at: AwsSecurityhubInsightArgsfiltersFirstObservedAt;
  generator_id: AwsSecurityhubInsightArgsfiltersGeneratorId;
  id: AwsSecurityhubInsightArgsfiltersid;
  keyword: AwsSecurityhubInsightArgsfilterskeyword;
  last_observed_at: AwsSecurityhubInsightArgsfiltersLastObservedAt;
  malware_name: AwsSecurityhubInsightArgsfiltersMalwareName;
  malware_path: AwsSecurityhubInsightArgsfiltersMalwarePath;
  malware_state: AwsSecurityhubInsightArgsfiltersMalwareState;
  malware_type: AwsSecurityhubInsightArgsfiltersMalwareType;
  network_destination_domain: AwsSecurityhubInsightArgsfiltersNetworkDestinationDomain;
  network_destination_ipv4: AwsSecurityhubInsightArgsfiltersNetworkDestinationIpv4;
  network_destination_ipv6: AwsSecurityhubInsightArgsfiltersNetworkDestinationIpv6;
  network_destination_port: AwsSecurityhubInsightArgsfiltersNetworkDestinationPort;
  network_direction: AwsSecurityhubInsightArgsfiltersNetworkDirection;
  network_protocol: AwsSecurityhubInsightArgsfiltersNetworkProtocol;
  network_source_domain: AwsSecurityhubInsightArgsfiltersNetworkSourceDomain;
  network_source_ipv4: AwsSecurityhubInsightArgsfiltersNetworkSourceIpv4;
  network_source_ipv6: AwsSecurityhubInsightArgsfiltersNetworkSourceIpv6;
  network_source_mac: AwsSecurityhubInsightArgsfiltersNetworkSourceMac;
  network_source_port: AwsSecurityhubInsightArgsfiltersNetworkSourcePort;
  note_text: AwsSecurityhubInsightArgsfiltersNoteText;
  note_updated_at: AwsSecurityhubInsightArgsfiltersNoteUpdatedAt;
  note_updated_by: AwsSecurityhubInsightArgsfiltersNoteUpdatedBy;
  process_launched_at: AwsSecurityhubInsightArgsfiltersProcessLaunchedAt;
  process_name: AwsSecurityhubInsightArgsfiltersProcessName;
  process_parent_pid: AwsSecurityhubInsightArgsfiltersProcessParentPid;
  process_path: AwsSecurityhubInsightArgsfiltersProcessPath;
  process_pid: AwsSecurityhubInsightArgsfiltersProcessPid;
  process_terminated_at: AwsSecurityhubInsightArgsfiltersProcessTerminatedAt;
  product_arn: AwsSecurityhubInsightArgsfiltersProductArn;
  product_fields: AwsSecurityhubInsightArgsfiltersProductFields;
  product_name: AwsSecurityhubInsightArgsfiltersProductName;
  recommendation_text: AwsSecurityhubInsightArgsfiltersRecommendationText;
  record_state: AwsSecurityhubInsightArgsfiltersRecordState;
  related_findings_id: AwsSecurityhubInsightArgsfiltersRelatedFindingsId;
  related_findings_product_arn: AwsSecurityhubInsightArgsfiltersRelatedFindingsProductArn;
  resource_aws_ec2_instance_iam_instance_profile_arn: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceIamInstanceProfileArn;
  resource_aws_ec2_instance_image_id: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceImageId;
  resource_aws_ec2_instance_ipv4_addresses: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceIpv4Addresses;
  resource_aws_ec2_instance_ipv6_addresses: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceIpv6Addresses;
  resource_aws_ec2_instance_key_name: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceKeyName;
  resource_aws_ec2_instance_launched_at: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceLaunchedAt;
  resource_aws_ec2_instance_subnet_id: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceSubnetId;
  resource_aws_ec2_instance_type: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceType;
  resource_aws_ec2_instance_vpc_id: AwsSecurityhubInsightArgsfiltersResourceAwsEc2InstanceVpcId;
  resource_aws_iam_access_key_created_at: AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyCreatedAt;
  resource_aws_iam_access_key_status: AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyStatus;
  resource_aws_iam_access_key_user_name: AwsSecurityhubInsightArgsfiltersResourceAwsIamAccessKeyUserName;
  resource_aws_s3_bucket_owner_id: AwsSecurityhubInsightArgsfiltersResourceAwsS3BucketOwnerId;
  resource_aws_s3_bucket_owner_name: AwsSecurityhubInsightArgsfiltersResourceAwsS3BucketOwnerName;
  resource_container_image_id: AwsSecurityhubInsightArgsfiltersResourceContainerImageId;
  resource_container_image_name: AwsSecurityhubInsightArgsfiltersResourceContainerImageName;
  resource_container_launched_at: AwsSecurityhubInsightArgsfiltersResourceContainerLaunchedAt;
  resource_container_name: AwsSecurityhubInsightArgsfiltersResourceContainerName;
  resource_details_other: AwsSecurityhubInsightArgsfiltersResourceDetailsOther;
  resource_id: AwsSecurityhubInsightArgsfiltersResourceId;
  resource_partition: AwsSecurityhubInsightArgsfiltersResourcePartition;
  resource_region: AwsSecurityhubInsightArgsfiltersResourceRegion;
  resource_tags: AwsSecurityhubInsightArgsfiltersResourceTags;
  resource_type: AwsSecurityhubInsightArgsfiltersResourceType;
  severity_label: AwsSecurityhubInsightArgsfiltersSeverityLabel;
  source_url: AwsSecurityhubInsightArgsfiltersSourceUrl;
  threat_intel_indicator_category: AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorCategory;
  threat_intel_indicator_last_observed_at: AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorLastObservedAt;
  threat_intel_indicator_source: AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorSource;
  threat_intel_indicator_source_url: AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorSourceUrl;
  threat_intel_indicator_type: AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorType;
  threat_intel_indicator_value: AwsSecurityhubInsightArgsfiltersThreatIntelIndicatorValue;
  title: AwsSecurityhubInsightArgsfilterstitle;
  type: AwsSecurityhubInsightArgsfilterstype;
  updated_at: AwsSecurityhubInsightArgsfiltersUpdatedAt;
  user_defined_values: AwsSecurityhubInsightArgsfiltersUserDefinedValues;
  verification_state: AwsSecurityhubInsightArgsfiltersVerificationState;
  workflow_status: AwsSecurityhubInsightArgsfiltersWorkflowStatus;
}
export interface AwsSecurityhubInsightArgs {
  group_by_attribute: string;
  name: string;
  filters: AwsSecurityhubInsightArgsfilters;
}
export class aws_securityhub_insight extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubInsightArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_insight");
  }
}