import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubInsightArgsFiltersAwsAccountId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersCompanyName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersComplianceStatus {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersConfidence {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersCreatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersCreatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersCreatedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersCriticality {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersDescription {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersFindingProviderFieldsConfidence {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersFindingProviderFieldsCriticality {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersFindingProviderFieldsRelatedFindingsId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersFindingProviderFieldsRelatedFindingsProductArn {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersFindingProviderFieldsSeverityLabel {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersFindingProviderFieldsSeverityOriginal {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersFindingProviderFieldsTypes {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersFirstObservedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersFirstObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersFirstObservedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersGeneratorId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersKeyword {
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersLastObservedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersLastObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersLastObservedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersMalwareName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersMalwarePath {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersMalwareState {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersMalwareType {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkDestinationDomain {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkDestinationIpv4 {
  cidr: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkDestinationIpv6 {
  cidr: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkDestinationPort {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkDirection {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkProtocol {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkSourceDomain {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkSourceIpv4 {
  cidr: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkSourceIpv6 {
  cidr: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkSourceMac {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersNetworkSourcePort {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersNoteText {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersNoteUpdatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersNoteUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersNoteUpdatedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersNoteUpdatedBy {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersProcessLaunchedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersProcessLaunchedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersProcessLaunchedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersProcessName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersProcessParentPid {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersProcessPath {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersProcessPid {
  eq?: string;
  gte?: string;
  lte?: string;
}

export interface AwsSecurityhubInsightArgsFiltersProcessTerminatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersProcessTerminatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersProcessTerminatedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersProductArn {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersProductFields {
  comparison: string;
  key: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersProductName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersRecommendationText {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersRecordState {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersRelatedFindingsId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersRelatedFindingsProductArn {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceIamInstanceProfileArn {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceImageId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceIpv4Addresses {
  cidr: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceIpv6Addresses {
  cidr: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceKeyName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceLaunchedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceLaunchedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceLaunchedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceSubnetId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceType {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceVpcId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyCreatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyCreatedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyStatus {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyUserName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsS3BucketOwnerId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceAwsS3BucketOwnerName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceContainerImageId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceContainerImageName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceContainerLaunchedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersResourceContainerLaunchedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersResourceContainerLaunchedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersResourceContainerName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceDetailsOther {
  comparison: string;
  key: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourcePartition {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceRegion {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceTags {
  comparison: string;
  key: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersResourceType {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersSeverityLabel {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersSourceUrl {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorCategory {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorLastObservedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorLastObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorLastObservedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorSource {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorSourceUrl {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorType {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorValue {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersTitle {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersType {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersUpdatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubInsightArgsFiltersUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubInsightArgsFiltersUpdatedAtDateRange;
}

export interface AwsSecurityhubInsightArgsFiltersUserDefinedValues {
  comparison: string;
  key: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersVerificationState {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFiltersWorkflowStatus {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubInsightArgsFilters {
  aws_account_id: AwsSecurityhubInsightArgsFiltersAwsAccountId;
  company_name: AwsSecurityhubInsightArgsFiltersCompanyName;
  compliance_status: AwsSecurityhubInsightArgsFiltersComplianceStatus;
  confidence: AwsSecurityhubInsightArgsFiltersConfidence;
  created_at: AwsSecurityhubInsightArgsFiltersCreatedAt;
  criticality: AwsSecurityhubInsightArgsFiltersCriticality;
  description: AwsSecurityhubInsightArgsFiltersDescription;
  finding_provider_fields_confidence: AwsSecurityhubInsightArgsFiltersFindingProviderFieldsConfidence;
  finding_provider_fields_criticality: AwsSecurityhubInsightArgsFiltersFindingProviderFieldsCriticality;
  finding_provider_fields_related_findings_id: AwsSecurityhubInsightArgsFiltersFindingProviderFieldsRelatedFindingsId;
  finding_provider_fields_related_findings_product_arn: AwsSecurityhubInsightArgsFiltersFindingProviderFieldsRelatedFindingsProductArn;
  finding_provider_fields_severity_label: AwsSecurityhubInsightArgsFiltersFindingProviderFieldsSeverityLabel;
  finding_provider_fields_severity_original: AwsSecurityhubInsightArgsFiltersFindingProviderFieldsSeverityOriginal;
  finding_provider_fields_types: AwsSecurityhubInsightArgsFiltersFindingProviderFieldsTypes;
  first_observed_at: AwsSecurityhubInsightArgsFiltersFirstObservedAt;
  generator_id: AwsSecurityhubInsightArgsFiltersGeneratorId;
  id: AwsSecurityhubInsightArgsFiltersId;
  keyword: AwsSecurityhubInsightArgsFiltersKeyword;
  last_observed_at: AwsSecurityhubInsightArgsFiltersLastObservedAt;
  malware_name: AwsSecurityhubInsightArgsFiltersMalwareName;
  malware_path: AwsSecurityhubInsightArgsFiltersMalwarePath;
  malware_state: AwsSecurityhubInsightArgsFiltersMalwareState;
  malware_type: AwsSecurityhubInsightArgsFiltersMalwareType;
  network_destination_domain: AwsSecurityhubInsightArgsFiltersNetworkDestinationDomain;
  network_destination_ipv4: AwsSecurityhubInsightArgsFiltersNetworkDestinationIpv4;
  network_destination_ipv6: AwsSecurityhubInsightArgsFiltersNetworkDestinationIpv6;
  network_destination_port: AwsSecurityhubInsightArgsFiltersNetworkDestinationPort;
  network_direction: AwsSecurityhubInsightArgsFiltersNetworkDirection;
  network_protocol: AwsSecurityhubInsightArgsFiltersNetworkProtocol;
  network_source_domain: AwsSecurityhubInsightArgsFiltersNetworkSourceDomain;
  network_source_ipv4: AwsSecurityhubInsightArgsFiltersNetworkSourceIpv4;
  network_source_ipv6: AwsSecurityhubInsightArgsFiltersNetworkSourceIpv6;
  network_source_mac: AwsSecurityhubInsightArgsFiltersNetworkSourceMac;
  network_source_port: AwsSecurityhubInsightArgsFiltersNetworkSourcePort;
  note_text: AwsSecurityhubInsightArgsFiltersNoteText;
  note_updated_at: AwsSecurityhubInsightArgsFiltersNoteUpdatedAt;
  note_updated_by: AwsSecurityhubInsightArgsFiltersNoteUpdatedBy;
  process_launched_at: AwsSecurityhubInsightArgsFiltersProcessLaunchedAt;
  process_name: AwsSecurityhubInsightArgsFiltersProcessName;
  process_parent_pid: AwsSecurityhubInsightArgsFiltersProcessParentPid;
  process_path: AwsSecurityhubInsightArgsFiltersProcessPath;
  process_pid: AwsSecurityhubInsightArgsFiltersProcessPid;
  process_terminated_at: AwsSecurityhubInsightArgsFiltersProcessTerminatedAt;
  product_arn: AwsSecurityhubInsightArgsFiltersProductArn;
  product_fields: AwsSecurityhubInsightArgsFiltersProductFields;
  product_name: AwsSecurityhubInsightArgsFiltersProductName;
  recommendation_text: AwsSecurityhubInsightArgsFiltersRecommendationText;
  record_state: AwsSecurityhubInsightArgsFiltersRecordState;
  related_findings_id: AwsSecurityhubInsightArgsFiltersRelatedFindingsId;
  related_findings_product_arn: AwsSecurityhubInsightArgsFiltersRelatedFindingsProductArn;
  resource_aws_ec2_instance_iam_instance_profile_arn: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceIamInstanceProfileArn;
  resource_aws_ec2_instance_image_id: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceImageId;
  resource_aws_ec2_instance_ipv4_addresses: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceIpv4Addresses;
  resource_aws_ec2_instance_ipv6_addresses: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceIpv6Addresses;
  resource_aws_ec2_instance_key_name: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceKeyName;
  resource_aws_ec2_instance_launched_at: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceLaunchedAt;
  resource_aws_ec2_instance_subnet_id: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceSubnetId;
  resource_aws_ec2_instance_type: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceType;
  resource_aws_ec2_instance_vpc_id: AwsSecurityhubInsightArgsFiltersResourceAwsEc2InstanceVpcId;
  resource_aws_iam_access_key_created_at: AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyCreatedAt;
  resource_aws_iam_access_key_status: AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyStatus;
  resource_aws_iam_access_key_user_name: AwsSecurityhubInsightArgsFiltersResourceAwsIamAccessKeyUserName;
  resource_aws_s3_bucket_owner_id: AwsSecurityhubInsightArgsFiltersResourceAwsS3BucketOwnerId;
  resource_aws_s3_bucket_owner_name: AwsSecurityhubInsightArgsFiltersResourceAwsS3BucketOwnerName;
  resource_container_image_id: AwsSecurityhubInsightArgsFiltersResourceContainerImageId;
  resource_container_image_name: AwsSecurityhubInsightArgsFiltersResourceContainerImageName;
  resource_container_launched_at: AwsSecurityhubInsightArgsFiltersResourceContainerLaunchedAt;
  resource_container_name: AwsSecurityhubInsightArgsFiltersResourceContainerName;
  resource_details_other: AwsSecurityhubInsightArgsFiltersResourceDetailsOther;
  resource_id: AwsSecurityhubInsightArgsFiltersResourceId;
  resource_partition: AwsSecurityhubInsightArgsFiltersResourcePartition;
  resource_region: AwsSecurityhubInsightArgsFiltersResourceRegion;
  resource_tags: AwsSecurityhubInsightArgsFiltersResourceTags;
  resource_type: AwsSecurityhubInsightArgsFiltersResourceType;
  severity_label: AwsSecurityhubInsightArgsFiltersSeverityLabel;
  source_url: AwsSecurityhubInsightArgsFiltersSourceUrl;
  threat_intel_indicator_category: AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorCategory;
  threat_intel_indicator_last_observed_at: AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorLastObservedAt;
  threat_intel_indicator_source: AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorSource;
  threat_intel_indicator_source_url: AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorSourceUrl;
  threat_intel_indicator_type: AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorType;
  threat_intel_indicator_value: AwsSecurityhubInsightArgsFiltersThreatIntelIndicatorValue;
  title: AwsSecurityhubInsightArgsFiltersTitle;
  type: AwsSecurityhubInsightArgsFiltersType;
  updated_at: AwsSecurityhubInsightArgsFiltersUpdatedAt;
  user_defined_values: AwsSecurityhubInsightArgsFiltersUserDefinedValues;
  verification_state: AwsSecurityhubInsightArgsFiltersVerificationState;
  workflow_status: AwsSecurityhubInsightArgsFiltersWorkflowStatus;
}

export interface AwsSecurityhubInsightArgs {
  group_by_attribute: string;
  name: string;
  filters: AwsSecurityhubInsightArgsFilters;
}

export class aws_securityhub_insight extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubInsightArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_insight");
  }
}
