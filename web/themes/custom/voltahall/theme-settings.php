<?php

declare(strict_types=1);

/**
 * @file
 * Theme settings form for voltahall theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function voltahall_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['voltahall'] = [
    '#type' => 'details',
    '#title' => t('voltahall'),
    '#open' => TRUE,
  ];

  $form['voltahall']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
